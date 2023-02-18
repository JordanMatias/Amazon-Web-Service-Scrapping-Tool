module.exports = mongoose => {
    const Product = mongoose.model(
        "product",
        mongoose.Schema(
            {
                name: String,
                image: String,
                price: String
            },
            { timestamps: true }
        )
    );

    return Product;
};

module.exports = mongoose => {
    const Gender = mongoose.model(
        "gener",
        mongoose.Schema(
            {
                name: String,
                image: String,
                price: String
            },
            { timestamps: true }
        )
    );

    return Gender;
};


module.exports = mongoose => {
    const Detist = mongoose.model(
        "dentist",
        mongoose.Schema(
            {
                name: String,
                image: String,
                price: String
            },
            { timestamps: true }
        )
    );

    return Dentist;
};
