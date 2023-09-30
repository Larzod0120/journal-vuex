/*
El State es reactivo y cuando se cambie el state se va a notificar a todos los componentes o los lugares que estén escuchando los cambios de nuestro state
*/

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum magna orci, sit amet placerat enim pulvinar nec. Fusce et augue eros. Suspendisse pulvinar posuere sapien vitae venenatis. Sed non orci et purus egestas venenatis. Suspendisse ut ultrices metus, id lobortis arcu. Integer maximus sem leo, vitae fringilla sem malesuada vitae. Aenean scelerisque ac turpis vel sagittis. Nulla placerat, turpis at hendrerit faucibus, felis orci finibus arcu, at porttitor nisi mi eget arcu. Pellentesque quam quam, egestas non mauris sed, congue semper sem. Nullam lacinia tempus odio elementum tincidunt. Donec sed urna ac mi faucibus iaculis a eu justo. Etiam sem nulla, scelerisque sed commodo quis, fermentum vel turpis. Nunc varius sollicitudin mi eget scelerisque. Duis cursus felis non libero pharetra, ac vehicula orci vulputate. Mauris viverra condimentum odio a semper.',
            picture: null,

        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Mauris urna quam, volutpat non tellus eget, ultricies tincidunt purus. Donec in metus aliquet, mattis leo in, elementum erat. Sed eros dolor, venenatis sed libero eget, egestas sagittis purus. Nulla facilisi. Fusce quis orci libero. Nam eget semper risus. Phasellus et nunc suscipit, tincidunt neque accumsan, viverra elit. Mauris consequat, nisi non tempor malesuada, diam sem sagittis nisl, at vestibulum tellus neque nec nisl. Phasellus lacinia nulla non eros tempus varius. Sed vulputate volutpat tellus, non feugiat justo. Integer non pulvinar neque.',
            picture: null,

        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Praesent dignissim justo laoreet, placerat diam vel, venenatis enim. Curabitur laoreet quis augue vitae malesuada. Praesent tincidunt arcu a lectus sagittis, non rutrum risus commodo. Praesent ut placerat diam. In hac habitasse platea dictumst. Quisque semper urna non diam tristique ornare. Nam eu egestas tellus. Integer eget posuere quam. Duis scelerisque porttitor sapien ut scelerisque. Sed aliquam sollicitudin magna, in maximus turpis ullamcorper ut. Pellentesque molestie justo non rhoncus bibendum. Curabitur sed tellus at ligula scelerisque blandit quis id nunc. Integer condimentum neque id metus tincidunt venenatis.',
            picture: null,

        },
    ],

})