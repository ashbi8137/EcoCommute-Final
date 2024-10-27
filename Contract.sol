// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EcoCommute {
    
    struct User {
        string name;
        uint256 totalTrips;
        uint256 ecoPoints; 
    }

    mapping(address => User) public users;
    event UserRegistered(address userAddress, string name);
    
    event EcoTripRecorded(address userAddress, uint256 tripCount, uint256 pointsEarned);
    function registerUser(string memory _name) public {
        require(bytes(users[msg.sender].name).length == 0, "User already registered");
        users[msg.sender] = User(_name, 0, 0);
        emit UserRegistered(msg.sender, _name);
    }
    function recordEcoTrip() public {
        require(bytes(users[msg.sender].name).length > 0, "User not registered");
        users[msg.sender].totalTrips += 1;
        uint256 points = calculateEcoPoints();
        users[msg.sender].ecoPoints += points;
        emit EcoTripRecorded(msg.sender, users[msg.sender].totalTrips, points);
    }

    function calculateEcoPoints() internal pure returns (uint256) {
        return 10; 
    }

    function getUserInfo(address _userAddress) public view returns (string memory, uint256, uint256) {
        User memory user = users[_userAddress];
        return (user.name, user.totalTrips, user.ecoPoints);
    }
}
