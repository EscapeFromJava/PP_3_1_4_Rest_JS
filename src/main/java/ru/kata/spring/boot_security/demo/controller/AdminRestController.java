package ru.kata.spring.boot_security.demo.controller;

import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AdminRestController {

    private final UserService userService;
    private final RoleService roleService;

    public AdminRestController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/user")
    public User getUserById(Principal principal) {
        return userService.findUserByEmail(principal.getName());
    }

    @GetMapping("/roles")
    public List<Role> getAllRoles() {
        return roleService.getRoles();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.findUserById(id);
    }

    @PostMapping("/users")
    public User saveUser(@RequestBody User user) {
        userService.saveOrUpdate(user);
        return user;
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody User user) {
        userService.saveOrUpdate(user);
        return user;
    }

    @DeleteMapping("/users/{id}")
    public String deleteUserById(@PathVariable Long id) {
        User user = userService.findUserById(id);
        if (user == null) {
            return "User with ID=" + id + " was not found";
        }
        userService.deleteUser(id);
        return "User with ID=" + id + " was deleted";
    }
}
