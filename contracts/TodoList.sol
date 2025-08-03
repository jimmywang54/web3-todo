pragma solidity ^0.8.19;

contract TodoList {
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(address => Task[]) public tasks;

    function addTask(string memory _content) external {
        tasks[msg.sender].push(Task({
            id: tasks[msg.sender].length,
            content: _content,
            completed: false
        }));
    }

    function toggleComplete(uint _id) external {
        require(_id < tasks[msg.sender].length, "Invalid id");
        tasks[msg.sender][_id].completed = !tasks[msg.sender][_id].completed;
    }

    function getTasks() external view returns (Task[] memory) {
        return tasks[msg.sender];
    }
}