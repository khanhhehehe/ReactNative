import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, FlatList, Keyboard, Modal, Pressable, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react';
const Lab1 = (props) => {
    const [hide, setHide] = useState(false)
    const [nameFood, setName] = useState()
    const [desFood, setDes] = useState()
    const [listF, setlistF] = useState([])
    const [idF, setidF] = useState(0)
    const [editId, setEditId] = useState(-1)
    const addListFood = () => {
        // Nếu editId !=0 thì là đang chỉnh sửa
        if (editId >= 0) {
            const newEditList = listF.map(item => {
                if (item.id == editId) {
                    //Gán giá trị mới ở state sau khi nhập
                    item.name = nameFood;
                    item.price = desFood;
                }
                return item
            })
            setlistF(newEditList)
            return onClose()
        }

        setidF(idF + 1)
        setlistF([...listF, { id: idF, name: nameFood, price: desFood }])
        setName('')
        setDes('')
        Keyboard.dismiss();
        setHide(false)

    }
    const onDelete = (itemId) => {
        Alert.alert('Bạn có chắc chắn muốn xóa không?', '', [
            {
                text: 'OK', onPress: () => {
                    const newList = listF.filter((item) => { return item.id !== itemId });
                    setlistF(newList)
                }
            },
        ]);
    }
    const onEdit = (editId) => {
        //1 Mở modal
        setHide(true)

        //2 Tìm kiếm phần tử có id - editId
        const editItem = listF.find(item => item.id == editId);

        //3 Hiển thị dữ liệu tìm đc
        setName(editItem.name)
        setDes(editItem.price)
        setEditId(editItem.id)
        console.log(editId)
    }
    const onClose = () => {
        setHide(false);
        setName('')
        setDes('')
        setEditId(-1)
    }
    return (
        <View style={styles.bg_body}>
            <View style={styles.bghoten}>
                <Text style={styles.textName}>
                    Họ tên: Nguyễn Quốc Khánh
                </Text>
                <Text style={styles.textName}>
                    MSV: PH27525
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => setHide(true)}>
                <Text style={styles.textItem}>Thêm mới</Text>
            </TouchableOpacity>

            <Modal visible={hide} animationType="slide">
                <View style={styles.bg_input}>
                    <TextInput
                        value={nameFood}
                        style={styles.input}
                        onChangeText={(f) => setName(f)}
                        placeholder="Tên món ăn:" />
                    <TextInput
                        value={desFood}
                        style={styles.input}
                        onChangeText={(f) => setDes(f)}
                        placeholder="Mô tả:" />
                    <Image
                        source={{
                            uri: 'asdadasd',
                            // uri: 'https://reactnative.dev/img/tiny_logo.png',
                            uri: 'https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000',
                        }}
                        style={styles.img}
                    />
                    <View style={styles.bg_button}>
                        <TouchableOpacity style={[styles.button, styles.btn_huy]} onPress={() =>
                            // setHide(!hide)
                            onClose()
                        }>
                            <Text>Hủy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={addListFood}>
                            <Text>Lưu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <FlatList style={styles.backGroundFlat} data={listF}
                renderItem={({ item }) => <>
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
                            <View style={styles.bg_btnItem}>
                            <TouchableOpacity style={[styles.delete,styles.btn_huy]} onPress={() => onDelete(item.id)}>
                                <Text style={styles.txt}>Xóa</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.delete} onPress={() => onEdit(item.id)}>
                                <Text style={styles.txt}>Sửa</Text>
                            </TouchableOpacity>
                            </View>
                    </View>
                </>
                }
                keyExtractor={(item) => item.id} />
        </View>
    )
}
export function A_Product(props) {

    const onEdit = (editId) => {
        //1 Mở modal
        //---setForm(true)---(bên index lab1, setForm là hàm hiện modal)

        //2 Tìm kiếm phần tử có id - editId
        const editItem = list.find(item => item.id == editId);

        //3 Hiển thị dữ liệu tìm đc
        // setName(editItem.name)
        // setDes(editItem.price)---(bên index lab1)
        //setEditId(editId)
    }

}
export function ListProductFood(props) {
    const list = props.data || [];

}
export default Lab1
const styles = StyleSheet.create({
    bg_body: {
        flex: 1,
    },
    bghoten: {
        backgroundColor: '#FFF3E0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    img: {
        backgroundColor: '#80DEEA',
        borderRadius: 15,
        width: 100,
        height: 100,
    },
    textName: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        backgroundColor: '#00B0FF',
        borderRadius: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    img: {
        backgroundColor: '#80DEEA',
        borderRadius: 15,
        width: 100,
        height: 100,
        marginLeft: 12
    },
    bg_button: {
        flexDirection: 'row',
        margin: 8,
        justifyContent: 'flex-end',
    },
    btn_huy: {
        marginRight: 8,
    },
    bg_input: {
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        marginTop: 10
    },
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
        borderRadius: 10,
        justifyContent: "flex-end",
        marginTop: 10
    },
    bg_btnItem: {
        flexDirection: 'row',
        justifyContent:'flex-end'
    },
    txt:{
        fontWeight: 'bold',
        color:"#00C853"
    },
})