import mongoose from "mongoose";

const AdminSchema=new mongoose.Schema({
    AdminId:{
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type:String,
        required:true,
    },
    avatar:{
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw0vYt2DOFw4WgNpI_NfhU-S&ust=1707455034684000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOi6uOn7moQDFQAAAAAdAAAAABAE"
    },
},{timestamps: true});

const Admin=mongoose.model('Admin',AdminSchema);

export default Admin;