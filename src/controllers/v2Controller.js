let resourcesV2 = [];

exports.getAllResources = (req, res) => res.json(resourcesV2);
exports.createResource = (req, res) => {
    const newResource = { id: resourcesV2.length + 1, ...req.body };
    resourcesV2.push(newResource);
    res.status(201).json(newResource);
};
exports.updateResource = (req, res) => {
    const { id } = req.params;
    const index = resourcesV2.findIndex(r => r.id == id);
    if (index === -1) return res.status(404).json({ error: "Resource not found" });
    resourcesV2[index] = { ...resourcesV2[index], ...req.body };
    res.json(resourcesV2[index]);
};
exports.modifyResource = (req, res) => {
    const { id } = req.params;
    const index = resourcesV2.findIndex(r => r.id == id);
    if (index === -1) return res.status(404).json({ error: "Resource not found" });
    resourcesV2[index] = { ...resourcesV2[index], ...req.body };
    res.json(resourcesV2[index]);
};
exports.deleteResource = (req, res) => {
    const { id } = req.params;
    resourcesV2 = resourcesV2.filter(r => r.id != id);
    res.json({ message: "Resource deleted" });
};
