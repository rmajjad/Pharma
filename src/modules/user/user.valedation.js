import Joi from 'joi';

export const updateUserSchema = Joi.object({
    userName: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    confirmEmail: Joi.string().valid('true','false').required(),
    status: Joi.string().valid('Active','NotActive').required(),
    role: Joi.string().valid('User','Admin','SuperAdmin').required(),
    id : Joi.string().hex().length(24),
});

export const updateAdminStatus = Joi.object({
    status: Joi.string().valid('Active','NotActive').required(),
    id : Joi.string().hex().length(24),
});

export const destroySchema = Joi.object({
    id: Joi.string().hex().length(24),
});