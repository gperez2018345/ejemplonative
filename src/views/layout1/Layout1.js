import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Layout.styles';

const Layout1 = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.tittle}>SnapShot</Text>
      <View style={styles.search}>
        <Text style={styles.searchWords}>Search...</Text>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.containerGrow9}>
          <Text style={styles.words}>Mountain</Text>
        </View>
        <View style={styles.containerGrow9}>
          <Text style={styles.words}>Beaches</Text>
        </View>
        <View style={styles.containerGrow9}>
          <Text style={styles.words}>Birds</Text>
        </View>
        <View style={styles.containerGrow9}>
          <Text style={styles.words}>Food</Text>
        </View>
      </View>
      <Text style={styles.subtittle}>Mountain Pictures</Text>
      <View style={styles.hContainer}>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/resized/bosque-junto-a-lago-9914.jpg?s=large',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/montanas-nevadas-en-el-bosque-9913.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/aurora-polar-reflejada-con-montanas-en-lago-9901.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/monte-taranaki-en-nueva-zelanda-9892.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/olas-en-lago-ohau-en-nueva-zelanda-9893.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/montanas-reflejadas-en-lago-con-globo-aerostatico-9890.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/resized/flores-a-traves-de-montanas-al-atardecer-9883.jpg?s=large',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/montana-al-atardecer-con-estrella-en-el-cielo-9876.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/montana-al-atardecer-en-california-9874.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/rio-en-el-bosque-en-idaho-estados-unidos-9873.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/rocas-con-hielo-y-nieve-9867.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/flores-con-montana-de-fondo-9860.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/bosque-reflejado-en-lago-9849.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/el-mar-en-la-costa-9838.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/bosque-con-lago-y-montanas-9813.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/montanas-nevadas-en-el-bosque-9792.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/solo-en-la-manana-arte-digital-9783.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/montanas-en-patagonia-argentina-9678.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/monte-everest-9647.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/estrellas-en-el-cielo-en-paisaje-montanoso-9620.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/playa-con-acantilado-al-lado-9569.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/pequeno-pueblo-en-las-montanas-9514.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/montanas-nevadas-en-el-bosque-9500.jpg',
            }}
          />
        </View>
        <View>
          <Image
            style={styles.imgContent}
            source={{
              uri: 'https://www.xtrafondos.com/wallpapers/montanas-al-atardecer-9306.jpg',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Layout1;
