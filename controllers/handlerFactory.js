const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');




exports.createOne = (Model) => catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body); // Corrected line
    res.status(201).json({
        status: 'success',
        code: 201,
        message: `Successfully created document`,
        data: doc
    });
});




exports.deleteOne = Model => catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const doc = await Model.findByIdAndDelete(id);

    if (!doc) {
        return next(new AppError('No document found with that id', 404))
    };


    res.status(200).json({
        status: 'success',
        code: 200,
        message: `Successfully document deleted`,
        data: doc
    });
});




exports.getOne = Model => catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const doc = await Model.findById(id);


    if (!doc) {
        return next(new AppError('No document found with that id', 404))
    };


    res.status(200).json({
        status: 'success',
        code: 200,
        message: "Document found with that id.",
        data: doc
    });
});




exports.updateOne = (Model) => catchAsync(async (req, res, next) => {
    const { id } = req.params;

 

    const doc = await Model.findByIdAndUpdate(id, validatedData, {
        new: true,
        runValidators: true
    });


    if (!doc) {
        return next(new AppError('No document found with that id', 404))
    };


    res.status(200).json({
        status: 'success',
        code: 200,
        message: `Successfully updated document`,
        data: doc
    });


    
});


exports.getAll = (Model) => catchAsync(async (req, res, next) => {
    const docs = await Model.find();

    res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Successfully retrieved all documents',
        data: docs
    });
});

exports.getAllPagination = (Model) => catchAsync(async (req, res, next) => {
    // Pagination options
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Query to get documents with pagination
    const docs = await Model.find()
        .skip(skip)
        .limit(limit);

    // Count total number of documents
    const totalCount = await Model.countDocuments();

    // Calculate total pages
    const totalPages = Math.ceil(totalCount / limit);

    // Determine if there are more pages
    const hasNextPage = page < totalPages;

    // Determine if there are previous pages
    const hasPrevPage = page > 1;

    res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Successfully retrieved documents',
        data: {
            totalDocs: totalCount,
            totalPages,
            currentPage: page,
            docsPerPage: limit,
            hasNextPage,
            hasPrevPage,
            data: docs
        }
    });
});