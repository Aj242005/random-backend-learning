//these handlers are used to add a middle ware in between the route access and the server for various purposes.

const asyncHandler = (inputFunction) => {
    (req,res,next) => {
        Promise.resolve(
            inputFunction(req,res)
        ).catch( (err) => (next(err)))
    }
}


export default asyncHandler;
