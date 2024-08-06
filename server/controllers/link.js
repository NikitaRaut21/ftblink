import Link from "./../models/Link.js"
import User from "./../models/User.js"

const PostLink = async (req, res) => {
    const { target, slug, title, user } = req.body;

    const link = new Link({
        target,
        slug,
        title,
        user
    })
    const SavedLink = await link.save();
    res.json({
        success: true,
        message: `link created successfully...`,
        data: SavedLink
    })
}
const getSlugRedirect = async (req, res) => {
    const { slug } = req.params
    const link = await Link.findOne({ slug });
    if (!link) {
        return res.json({
            success: false,
            message: "Link not found"
        })
    }
    link.views = link.views + 1;
    await link.save();
    res.redirect(link.target)
}
const getallLink = async (req, res) => {
    const {userId} = req.query;

    console.log('userId: ', userId);

    const user = await User.findById(userId)

    if (!user) {
        return res.json({
            success: false,
            data: null,
            message: 'User not found'
        })
    }
    const links = await Link.find({ user: userId }).sort({ createdAt: -1 })
    res.json({
        success: true,
        message: "all link fetch successfully",
        data: links
    })
}

export { PostLink, getSlugRedirect, getallLink };