import Users from 'meteor/nova:users';

/*
  Let's create a new "mods" group that can edit and delete any posts
*/

Users.createGroup("mods");

Users.groups.mods.can("posts.edit.all"); // mods can edit anybody's posts
Users.groups.mods.can("posts.remove.all"); // mods can delete anybody's posts

Users.createGroup("trusted");
Users.groups.trusted.can("posts.edit.all"); // trusted can edit anybody's posts


Users.groups.anonymous.cannot("comments.view.all"); //Users must login to see comments

Users.groups.mods.can("comments.edit.all"); // mods can edit anybody's comments
Users.groups.mods.can("comments.remove.all"); // mods can delete anybody's comments

Users.groups.default.cannot("posts.remove.own"); //Users cannot remove own posts


Users.groups.mods.cannot("posts.addField.color.own");

Users.groups.default.cannot("posts.addField.color.own");
Users.groups.default.can("users.edit.own");
Users.groups.default.cannot("users.remove.own");
Users.groups.default.cannot("posts.edit.all");


Users.groups.admins.can("users.edit.own");
Users.groups.admins.can("users.edit.all");
Users.groups.admins.can("users.remove.all");
Users.groups.admins.can("posts.addField.color.all");
Users.groups.admins.can("posts.remove.own");
Users.groups.admins.can("posts.addField.color.own");
Users.groups.admins.can("posts.edit.own");



