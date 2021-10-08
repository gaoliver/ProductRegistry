import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

interface Products {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    createdAt: string;
    updatedAt: string;
}

interface Props {
    products: Array<Products>;
}

const ProductList = ({ products }: Props) => {
    const styles = StyleSheet.create({
        list: {
            width: '100%',
            paddingHorizontal: 10
        },

        productBox: {
            width: '100%',
            height: 120,
            marginVertical: 2,
            padding: 20,
            backgroundColor: Colors.light.boxBackground,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',

            // Android
            elevation: 3,

            // iOS
            shadowColor: '#000',
            shadowRadius: 3,
            shadowOpacity: 0.3,
            shadowOffset: {
                height: 1,
                width: 0
            }
        },

        image: {
            width: '30%',
            height: '100%',
            backgroundColor: '#ccc'
        },

        infoSection: {
            width: '70%',
            height: '100%',
            justifyContent: 'space-between',
            paddingLeft: 20
        },
        title: {
            fontSize: 15,
            fontWeight: '500'
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline'
        },
        price: {
            fontSize: 20,
            fontWeight: '500',
            color: Colors.colors.accent
        },
        quantity: {
            fontSize: 14,
            color: Colors.colors.grey
        }
    });

    return (
        <View style={styles.list}>
            {products.map((x) => (
                // Produto
                <View style={styles.productBox} key={x.id}>
                    {/* Imagem */}
                    <Image source={{}} style={styles.image} />

                    <View style={styles.infoSection}>
                        {/* Nome do produto */}
                        <Text style={styles.title} numberOfLines={2}>
                            {x.name}
                        </Text>

                        <View style={styles.row}>
                            {/* Preço */}
                            <Text style={styles.price}>{`R$ ${x.price}`}</Text>

                            {/* Quantidade */}
                            <Text
                                style={styles.quantity}
                            >{`Quantidade: ${x.quantity}`}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default ProductList;
