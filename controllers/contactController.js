//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({
        "message" : "Get all contacts"
    });
};

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    res.status(201).json({
        "message" : "Create contact"
    });
};


//@desc Get an individual contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
    res.status(200).json({
        "message" : `Get contact for id ${req.params.id}`
    });
};


//@desc Update an individual contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
    res.status(200).json({
        "message" : `Updated contact ${req.params.id}`
    });
};

//@desc Delete an individual contact
//@route PUT /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
    res.status(200).json({
        "message" : `Deleted contact ${req.params.id}`
    });
};





module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };