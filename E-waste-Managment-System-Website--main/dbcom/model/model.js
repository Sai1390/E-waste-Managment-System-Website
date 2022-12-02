const { default: mongoose } = require("mongoose");
let schema = new mongoose.Schema({
    email: { type: String, require: true },
    pass: { type: String, require: true },
    cpass: { type: String, require: true }
})

let user = new mongoose.model("User", schema)
saveDoc = async() => {
    let u1 = new user({
        email: "Jeyadev.meka3112@gmail.com",
        pass: "jeyadev@124",

        cpass: "jeyadev@124",

        repeat: false

    })
    await u1.save()
}
module.exports = saveDoc