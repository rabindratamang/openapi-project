let resources = [];

exports.getAllResources = (req, res) => res.json(resources);
exports.createResource = (req, res) => {
    const newResource = { id: resources.length + 1, ...req.body };
    resources.push(newResource);
    res.status(201).json(newResource);
};
exports.updateResource = (req, res) => {
    const { id } = req.params;
    const index = resources.findIndex(r => r.id == id);
    if (index === -1) return res.status(404).json({ error: "Resource not found" });
    resources[index] = { ...resources[index], ...req.body };
    res.json(resources[index]);
};
exports.modifyResource = (req, res) => {
    const { id } = req.params;
    const index = resources.findIndex(r => r.id == id);
    if (index === -1) return res.status(404).json({ error: "Resource not found" });
    resources[index] = { ...resources[index], ...req.body };
    res.json(resources[index]);
};
exports.deleteResource = (req, res) => {
    const { id } = req.params;
    resources = resources.filter(r => r.id != id);
    res.json({ message: "Resource deleted" });
};
