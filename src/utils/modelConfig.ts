export const availableModels: { [key: string]: string[] } = {
    'single-shaft': ['TSH-60', 'TSH-80', 'TSH-100', 'TSH-130', 'TSH-160', 'TSH-200'],
    'dual-shaft': ['CS-20', 'CS-40', 'CS-60', 'CS-80', 'CS-100', 'CS-120', 'CS-150', 'CS-180', 'CS-200'],
    'quad-shaft': ['DS-80', 'DS-100', 'DS-150', 'DS-200'],
    'metal': ['RDM-100', 'RDM-150', 'RDM-180', 'RDM-200'],
    'harddisk': ['DATABER-S', 'DATABER-D', 'DATABER-T'],
    'mobile': ['TSM-150', 'TSM-300', 'CSM-150', 'CSM-200'],
    'pallet': ['TSV-140', 'TSV-200', 'TSVX-200'],
    'tree-root': ['TW-100', 'TW-150', 'TW-200'],
    'wood': ['TSY-100', 'TSY-150', 'TSY-200'],
    'glass': ['CK-200', 'CK-400', 'CKS-400', 'GB-300']
};

export const productTypes = Object.keys(availableModels);
