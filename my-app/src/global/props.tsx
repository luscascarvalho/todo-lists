export interface AuthContextType {
  taskList: Array<PropCard>;
  onOpen: void;
  handleEdit: Function;
  handleDelete: Function;
  filter: (t: string) => void;
}

export type PropCard = {
  description: string;
  flag: PropFlags;
  item: number;
  timeLimit: string;
  title: string;
};

type PropFlags = "urgente" | "opcional";