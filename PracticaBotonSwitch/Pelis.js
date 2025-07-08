import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import axios from 'axios';

export default function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [exactMatch, setExactMatch] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const API_KEY = '4c6f8927'; // quitamos espacio al final

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setNoResults(false);

    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      if (response.data.Response === 'True') {
        let movies = response.data.Search;

        if (exactMatch) {
          movies = movies.filter(
            movie => movie.Title.toLowerCase() === query.toLowerCase()
          );
        }

        // Obtener detalles de cada película para el rating
        const detailedMovies = await Promise.all(
          movies.map(async movie => {
            try {
              const detailRes = await axios.get(
                `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`
              );
              return {
                ...movie,
                imdbRating: detailRes.data.imdbRating || 'N/A',
              };
            } catch {
              return {
                ...movie,
                imdbRating: 'N/A',
              };
            }
          })
        );

        setResults(detailedMovies);
        if (detailedMovies.length === 0) setNoResults(true);
      } else {
        setResults([]);
        setNoResults(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setResults([]);
      setNoResults(true);
    } finally {
      setIsLoading(false);
    }
  };

  const MovieCard = ({ movie }) => (
    <View style={styles.card}>
      <Image
        source={{
          uri:
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/100x150.png?text=No+Image',
        }}
        style={styles.poster}
      />
      <View style={styles.cardInfo}>
        <Text style={styles.movieTitle}>{movie.Title}</Text>
        <Text style={styles.movieText}>Año: {movie.Year}</Text>
        <Text style={styles.movieText}>Rating: ⭐ {movie.imdbRating}</Text>
        <Text style={styles.movieText}>Tipo: {movie.Type}</Text>
      </View>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.header}>🎬 Buscador de Películas</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre de la película"
          value={query}
          onChangeText={setQuery}
        />

        <View style={styles.buttonRow}>
          <Button
            title="Aproximada"
            onPress={() => {
              setExactMatch(false);
              handleSearch();
            }}
          />
          <Button
            title="Exacta"
            onPress={() => {
              setExactMatch(true);
              handleSearch();
            }}
          />
        </View>

        {isLoading ? (
          <ActivityIndicator size="large" color="#6200ee" style={{ marginTop: 30 }} />
        ) : noResults ? (
          <Text style={styles.noResults}>❗ No se encontraron resultados</Text>
        ) : (
          <FlatList
            data={results}
            keyExtractor={item => item.imdbID}
            renderItem={({ item }) => <MovieCard movie={item} />}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fafafa',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  noResults: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#888',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 2,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  cardInfo: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  movieTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  movieText: {
    fontSize: 14,
    color: '#555',
  },
});
