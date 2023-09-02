const cartService = require("../Services/cartServices");
const joi = require("joi");

const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const addToCartSchema=joi.object({
    ProductId: joi.number().required(),
    userId:joi.number().required(),
    quantity:joi.number().required(),
});

module.exports ={

    addToCart: async (req,res)=>{
        try {
            const validate= await addToCartSchema.validateAsync(req.body);
            if(validate.error){
                res.status(StatusCodes.BAD_REQUEST).send({
                    data:{},
                    message: ReasonPhrases.BAD_REQUEST,
                    error: validate.error
                })
            }

            const response = await cartService.addToCart(validate);
            console.log(response,"response");
            res.status(StatusCodes.OK).send({
                data:{response},
                message: ReasonPhrases.OK,
                error:{},
            })


        } catch (err) {
            res.status(StatusCodes.NOT_FOUND).send({
                data:{},
                message: "unable to add cart",
                error:error,
            })

        }

    }

    


}