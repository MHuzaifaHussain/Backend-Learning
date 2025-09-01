const File= require("../models/File");
const cloudinary= require("cloudinary").v2;

//Local File Upload Handler Function

exports.localFileUpload = async (req, res) => {
    try{
        //Fetch File from request
        const file = req.files.file;
        console.log("File -->", file);

        //Create path where file need to be stored in server
        let path= __dirname + "/files/" +Date.now() + `.${file.name.split('.')[1]}`;
        console.log("Path -->", path);

        //Add path to the move function
        file.mv(path, (e)=>{
            console.log(e);
        })

        //Create a successful response
        res.status(200).json({
            success: true,
            message: "Local file uploaded Successfully"
        })
    }catch(e){
        console.log("Not able to upload the file on server");
        console.log(e);
    }
}

function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}
async function uploadFileToCloudinary(file, folder, quality){
    const options = {folder};
    options.resource_type = "auto";
    if(quality){
        options.quality = quality;
    }
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) => {
    try{
        //Data fetch
        const{name, tags, email} = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        //Data Validation
        const supportedTypes =  ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log(fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File type is not supported",
            })
        }

        // If file format supported
        const response = await uploadFileToCloudinary(file, "FileUpload");
        console.log(response);

        //Storing Entry in DB
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })
        res.status(200).json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image uploaded Successfully",
        })

    }catch(e){
        console.error(e);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        })
    }
}

exports.videoUpload = async (req, res) => {
    try{
        //Data fetch
        const{name, tags, email} = req.body;
        console.log(name, tags, email);

        const file = req.files.videoFile;
        console.log(file);

        //Data Validation
        const supportedTypes =  ["mp4", "mov"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log(fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File type is not supported",
            })
        }
        //TODO: Add a upper limit of 5mb for video

        // If file format supported
        const response = await uploadFileToCloudinary(file, "FileUpload");
        console.log(response);

        //Storing Entry in DB
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })
        res.status(200).json({
            success: true,
            imageUrl: response.secure_url,
            message: "Video uploaded Successfully",
        })

    }catch(e){
        console.error(e);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        })
    }
}

exports.imageSizeReducer = async (req, res) => {
    try{
        //Data fetch
        const{name, tags, email} = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        //Data Validation
        const supportedTypes =  ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log(fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success: false,
                message: "File type is not supported",
            })
        }

        // If file format supported
        const response = await uploadFileToCloudinary(file, "FileUpload", 10);
        console.log(response);

        //Storing Entry in DB
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })
        res.status(200).json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image uploaded Successfully",
        })

    }catch(e){
        console.error(e);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        })
    }
}