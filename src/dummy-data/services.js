const services = [
    {
        id: 's1',
        name: 'Video Annotation Service',
        heroImage: 'https://i.ibb.co/rmy3Fxr/video-annotation.png',
        image: [
            'https://i.ibb.co/5nQxZDM/v1.jpg',
            'https://i.ibb.co/bvY3rGH/v2.png',
            'https://i.ibb.co/zSWyFWN/v3.jpg'
        ],
        description: 'Video annotation is the process of labeling or tagging video clips which are used for training computer vision models to detect or identify objects. Unlike image annotation, video annotation involves annotating objects on a frame-by-frame basis to make them recognizable for machine learning models.'
    },
    {
        id: 's2',
        name: 'Image Annotation Service',
        heroImage: 'https://i.ibb.co/Fw8PznK/image-annotation.png',
        image: [
            'https://i.ibb.co/5nQxZDM/v1.jpg',
            'https://i.ibb.co/bvY3rGH/v2.png',
            'https://i.ibb.co/zSWyFWN/v3.jpg'
        ],
        description: 'Video annotation is the process of labeling or tagging video clips which are used for training computer vision models to detect or identify objects. Unlike image annotation, video annotation involves annotating objects on a frame-by-frame basis to make them recognizable for machine learning models.'
    }
]

export const getAllServices = () => {
    return services;
}
export const getServiceById = serviceId => {
    const service = services.find( service => service.id === serviceId)
    return service;
}