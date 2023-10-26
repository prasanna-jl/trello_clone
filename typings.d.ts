interface Board{
    columns:Map<TypedColumn,Column>
}
type TypedColumn ="todo"|"improgress"|"done"
interface Column {
    id: TypedColumn
    todos: Todo[]
}
interface Todos{
    $id: string,
    $createdAt: string,
    title:string,
    status:string,
    image?:string,
}
interface Image{
    bucketId:string;
    fileId:string;
}