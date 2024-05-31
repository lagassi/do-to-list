import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveData(key: string, value: string): Promise<boolean> {
    try {
        await AsyncStorage.setItem(key, value);

        return true;
    } catch (error) {
        return false;
    }
}

export async function getData(key: string): Promise<string | boolean | null> {
    try {
        const result = await AsyncStorage.getItem(key);

        return result;
    } catch (error) {
        return false;
    }
}

export async function removeData(key: string): Promise<boolean> {
    try {
        await AsyncStorage.removeItem(key);

        return true;
    } catch (error) {
        return false;
    }
}