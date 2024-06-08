const router = require('express').Router();
const {
  getthought,
  getthoughtById,
  createthought,
  updatethought,
  deletethought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

router.route('/').get(getthought).post(createthought);

router.route('/:thoughtId').get(getthoughtById).put(updatethought).delete(deletethought);

router.route('/:thoughtId/reactions').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
