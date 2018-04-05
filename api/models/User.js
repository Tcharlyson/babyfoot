/**
 * BabyFoot.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    email: {
      type: 'string',
      unique: true,
      required: true,
      isEmail: true,
      maxLength: 250,
      example: 'tcharlyson@me.com'
    },
    name: {
      type: 'string',
      required: true,
      maxLength: 250,
      example: 'Martin'
    },
    firstName: {
      type: 'string',
      required: true,
      maxLength: 250,
      example: 'Arthur'
    },
    dateOfBirth: {
      type: 'number',
      isBefore: new Date()
    },
    sex: {
      type: 'string',
      isIn: ['male', 'female'],
    },
    password: {
      type: 'string',
      encrypt: true,
      minLength: 6,
      required: true,
    },
    
    // Lifecycle Callbacks, hash password before save
    // beforeCreate: function (values, cb) {
    //   bcrypt.hash(values.password, 10, function (err, hash) {
    //     if (err) return cb(err);
    //     values.password = hash;
    //     cb();
    //   });
    // }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    team: {
      model: 'team'
    }

  },

};

