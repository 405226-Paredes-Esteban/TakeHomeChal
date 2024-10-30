# Challenge Técnico: Consumo de API y Paginación con Angular

En este desafío técnico, se te pide que consumas la API de Rick and Morty para mostrar datos de personajes, implementar paginación y filtros por nombre utilizando formularios reactivos en Angular.

## Información General

La API de Rick and Morty proporciona datos sobre personajes de la serie de televisión Rick and Morty. La API paginará automáticamente las respuestas, proporcionando hasta 20 documentos por página. Cada recurso contiene un objeto de información con detalles sobre la respuesta, como la cantidad de resultados, la cantidad de páginas disponibles, enlaces a la siguiente y anterior página, entre otros.

## Documentación de la API

GET https://rickandmortyapi.com/api/character/?page=19

### Ejemplo de Respuesta

```
{
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character/?page=20",
    "prev": "https://rickandmortyapi.com/api/character/?page=18"
  },
  "results": [
    {
      "id": 361,
      "name": "Toxic Rick",
      "status": "Dead",
      "species": "Humanoid",
      "type": "Rick's Toxic Side",
      "gender": "Male",
      "origin": {
        "name": "Alien Spa",
        "url": "https://rickandmortyapi.com/api/location/64"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/27"
      ],
      "url": "https://rickandmortyapi.com/api/character/361",
      "created": "2018-01-10T18:20:41.703Z"
    },
    // Otros personajes...
  ]
}
 ```
### Esquema del Personaje

Cada personaje tiene los siguientes campos:

- **id**: El ID del personaje.
- **name**: El nombre del personaje.
- **status**: El estado del personaje ('Vivo', 'Muerto' o 'desconocido').
- **species**: La especie del personaje.
- **type**: El tipo o subespecie del personaje.
- **gender**: El género del personaje ('Femenino', 'Masculino', 'Sin género' o 'desconocido').
- **origin**: Objeto con el nombre y enlace a la ubicación de origen del personaje.
- **location**: Objeto con el nombre y enlace a la última ubicación conocida del personaje.
- **image**: Enlace a la imagen del personaje (300x300px).
- **episode**: Lista de episodios en los que aparece el personaje.
- **url**: Enlace al endpoint del personaje.
- **created**: Fecha de creación del personaje en la base de datos.

## Requisitos del Desafío

- Consumir la API de Rick and Morty para obtener datos de personajes.
- Implementar paginación para mostrar hasta 20 personajes por página.
- Permitir filtrar los personajes por nombre utilizando un formulario reactivo.
- Mostrar los datos de los personajes, incluyendo su imagen, nombre, estado y especie.

## Instrucciones y Consideraciones

- Se espera que utilices Angular (v14+) para desarrollar la aplicación.
- Framework Angular Material o Bootstrap.
- Utiliza formularios reactivos de Angular para implementar el filtro por nombre.
- Asegúrate de manejar correctamente la paginación para mostrar todos los personajes disponibles.
- Mantén un código limpio y bien organizado, siguiendo las mejores prácticas de desarrollo Angular.
- La aplicación debe ser responsiva y fácil de usar.

¡Buena suerte y disfruta del desafío! Si tienes alguna pregunta, no dudes en preguntar.
