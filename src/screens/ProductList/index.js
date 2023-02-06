import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity,Alert, Pressable } from 'react-native'
import React from 'react'
import Lab1, { ListDetail } from '../lab1';

const ProductItem = (props) => {
    const item = props.item;
    
    return (
        <>
            <View style={styles.item2}>
                <View style={styles.item}>
                    <View>
                        <Text style={styles.textItem}>Tên món: {item.name}</Text>
                        <Text style={styles.textItem2}>Mô tả: {item.price}</Text>
                    </View>
                    <Image
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                        style={styles.img2}
                    />
                </View>
                <TouchableOpacity style={styles.delete} onPress={ () => onDelete(item.id)}>
                    <Text>Xóa</Text>
                </TouchableOpacity>
                <Pressable onPress={()=> onEdit(item.id)}>
                    <Text>Sua</Text>
                </Pressable>
            </View>
        </>
    )
}

const ListProduct = (props) => {
    // khi data không được truyền vào thì default là mảng rỗng []
    const list = props.data || [];
    return (
        <FlatList style={styles.backGroundFlat} data={[...list]}
            renderItem={({ item }) => <ProductItem item={item} listfood={list} />
            }
            keyExtractor={(item, index) => item.id} />
    )
}


export default ListProduct

const styles = StyleSheet.create({
    backGroundFlat: {
        backgroundColor: '#FFE0B2',
        padding: 10,
        marginTop: 30,
        width: '100%',
        borderRadius: 10
    },
    bg_item: {
        backgroundColor: '#80DEEA',
        borderRadius: 15,
        width: 100,
        height: 100,
    },
    textItem: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
    },
    textItem2: {
        fontSize: 16,
        color: '#fff'
    },
    item: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    item2: {
        padding: 8,
        backgroundColor: '#00C853',
        borderRadius: 10,
        marginVertical: 8
    },
    img2: {
        backgroundColor: '#80DEEA',
        borderRadius: 15,
        width: 70,
        height: 70,
        marginLeft: 12,
    },
    delete: {
        backgroundColor: "#fff",
        padding: 8,
        borderRadius:10,
        justifyContent: "flex-end"
    },
})