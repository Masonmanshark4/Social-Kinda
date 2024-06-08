const router = require('express').Router();
const {
  getuser,
  getuserById,
  createuser,
  updateuser,
  deleteuser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller');

router.route('/').get(getuser).post(createuser);

router.route('/:userId').get(getuserById).put(updateuser).delete(deleteuser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
