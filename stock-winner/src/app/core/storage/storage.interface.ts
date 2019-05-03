export interface IStorage {
    getData(key: string): string;
    putData(key: string, value: string);
}