// ... your imports
import Telescope from 'meteor/nova:lib';
import Users from 'meteor/nova:users';
import Upload from 'meteor/xavcz:nova-forms-upload';
 
// ... your permissions
const canInsert = user => Users.canDo(user, "users.new");
const canEdit = Users.canEdit;

// extends Users schema with a new field: 'telescope.avatar' 👁
Users.addField({
  fieldName: 'telescope.avatar',
  fieldSchema: {
    type: String,
    optional: true,
    publish: true,
    control: Upload,
    insertableIf: canInsert,
    editableIf: canEdit,
    form: {
      options: {
        preset: Telescope.settings.get('cloudinaryPresets').avatar // this setting refers to the transformation you want to apply to the image
      },
    }
  }
});

import PublicationUtils from 'meteor/utilities:smart-publications';
// publish this new field
PublicationUtils.addToFields(Users.publishedFields.list, ['telescope.avatar']);

const originalAvatarConstructor = Users.avatar;

// extends the Users.avatar function
Users.avatar = {
  ...originalAvatarConstructor,
  getUrl(user) {
    url = originalAvatarConstructor.getUrl(user);

    return !!user && user.telescope && user.telescope.avatar ? user.telescope.avatar : url;
  }
} 
