import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faFeatherAlt
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faFeatherAlt);
};

export default Icons;
