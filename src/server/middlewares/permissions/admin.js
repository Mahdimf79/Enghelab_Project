import User from 'Root/models/User';

export default async (req, res, next) => {
  const user = await User.findById(req.session.user);

  user.type >= 3 ? next() : res.json({ type: 3 });
};
