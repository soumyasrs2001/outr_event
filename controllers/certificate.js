const Certificate = require("../models/Certificate");

exports.getAllCerificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort("-createdAt");

    return res.status(200).json({
      certificates,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

exports.createCretificate = async (req, res) => {
  try {
    const { user_id, event_id, team } = req.body;

    if (!user_id && !event_id) {
      return res.status(403).json({
        error: "Please provide all values",
        message: "Please provide all values",
      });
    }

    const newCertificate = new Certificate({
      user_id,
      event_id,
      team,
      status: "pending",
    });

    await newCertificate.save();

    return res.status(200).json({
      message: "Certificate created successfully!",
      certificate: newCertificate,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

exports.getCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params._id);

    return res.status(200).json({
      certificate,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

exports.verifyCertificate = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params._id);

    if (!certificate) {
      return res.status(404).json({
        error: "Not found",
        message: "Not found",
      });
    }

    certificate.status = "completed";

    await certificate.save();

    return res.status(200).json({
      certificate,
      message: "Updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
