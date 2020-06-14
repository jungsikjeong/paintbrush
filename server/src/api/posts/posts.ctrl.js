// import Post from '../../models/post';
import mongoose from 'mongoose';
// import Joi from '@hapi/joi';

export const write = async (ctx) => {
  try {
    // const paint = await pusher.trigger('painting', 'draw', ctx.body);
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
