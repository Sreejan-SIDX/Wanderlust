# Wanderlust

Wanderlust is a travel planning and discovery application designed to help users explore new destinations, manage itineraries, and share travel experiences. The project aims to simplify trip organization with intuitive features and a beautiful interface.

## Features

- **Destination Discovery:** Search and browse a curated list of travel destinations.
- **Itinerary Management:** Create, edit, and organize your travel plans.
- **User Profiles:** Personalize your experience and keep track of journeys.
- **Reviews & Ratings:** Share feedback and read recommendations from other travelers.
- **Interactive Maps:** Visualize destinations and plan routes.
- **Social Sharing:** Share trips and experiences with friends.

## Technologies Used

**Backend & Server:**
- [Express.js](https://expressjs.com/) – Node.js web framework
- [Mongoose](https://mongoosejs.com/) – MongoDB object modeling
- [Passport.js](http://www.passportjs.org/) & [passport-local-mongoose](https://github.com/saintedlama/passport-local-mongoose) – Authentication
- [connect-mongo](https://github.com/jdesboeufs/connect-mongo) – MongoDB session store
- [connect-flash](https://github.com/jaredhanson/connect-flash) – Flash messages
- [Joi](https://joi.dev/) – Data validation

**Templating & Frontend:**
- [EJS](https://ejs.co/) & [ejs-mate](https://github.com/JacksonTian/ejs-mate) – Server-side templating
- [Bootstrap](https://getbootstrap.com/) – UI framework (via CDN)
- [Font Awesome](https://fontawesome.com/) – Icon library (via CDN)
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) – Interactive maps (via CDN)
- Custom CSS & JavaScript

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sreejan-SIDX/Wanderlust.git
   cd Wanderlust
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in required keys (e.g., MongoDB URI, session secret)

4. Run the application:
   ```bash
   npm start
   ```

### Usage

- Register or login to your account.
- Browse destinations and create itineraries.
- Share your experiences and connect with fellow travelers.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## Contact

Created by [Sreejan-SIDX](https://github.com/Sreejan-SIDX) — feel free to reach out for questions or collaboration!
