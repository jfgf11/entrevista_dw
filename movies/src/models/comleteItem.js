export class completeItem {
    total;
    entries;
    static fromJSON(data) {
        const completeItemModel = new completeItem();
        completeItemModel.total = data['total'];
        completeItemModel.entries = data['entries']
        return completeItemModel;
    }
}




//export class ItemModel {
//    title;
//    description;
//    programType;
//    url;
//    releaseYear;

//    static fromJSON(data) {
//        const itemModel = new ItemModel();
//        itemModel.title = data['title'];
//        itemModel.description = data['description']
//        itemModel.programType = data['programType']
//        itemModel.url = data['images']['Poster Art']['url']
//        itemModel.releaseYear = data['releaseYear']
//        return itemModel;
//    }
//}