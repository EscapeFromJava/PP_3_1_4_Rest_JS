package ru.kata.spring.boot_security.demo.util;

import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class UserGenerator {
    private static final String ROLE_ADMIN = "ADMIN";
    private static final String ROLE_USER = "USER";

    public static List<User> createUsersWithRoles() {
        User user1 = new User("user1@gmail.com", "user1", "user1", "user1", 30, new HashSet<>(Set.of(new Role(ROLE_USER))));
        User user2 = new User("user2@gmail.com", "user2", "user2", "user2", 35, new HashSet<>(Set.of(new Role(ROLE_USER))));
        User admin = new User("admin@gmail.com", "admin", "admin", "admin", 40, new HashSet<>(Set.of(new Role(ROLE_ADMIN))));
        User adminuser = new User("adminuser@gmail.com", "adminuser", "adminuser", "adminuser", 45, new HashSet<>(Set.of(new Role(ROLE_ADMIN), new Role(ROLE_USER))));
        return List.of(user1, user2, admin, adminuser);
    }
}
