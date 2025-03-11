export const newBookValidationSchema={
    title:{
        notEmpty:{
            errorMessage: "Title is Required"
        },
        isString:{
            errorMessage: "Title Must be a String"
            },
    },
        
    author:{
            notEmpty:{
                errorMessage: "Author is Required"
            },
            isString:{
                errorMessage: "Author Must be a String"
                },
        },
    publishYear:{
                notEmpty:{
                    errorMessage: "publish Year is Required"
                },
                isInt:{
                    errorMessage: "publish Year Must be a Number"
                    },
            },
    price:{
        notEmpty:{
            errorMessage: "Price is Required"
        },
        isFloat:{
            errorMessage: "Price Must be a Number"
            },
}}