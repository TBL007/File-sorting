import eel 
from pathlib import Path
import os
import sys
def get_resource_path(relative_path):
    """Finner den korrekte stien til filer, enten i utvikling eller i en .exe fil."""
    if hasattr(sys, "_MEIPASS"):
     
        return os.path.join(sys._MEIPASS, relative_path)
    
    return os.path.join(os.path.abspath("."), relative_path)


eel.init(get_resource_path("./public"))

@eel.expose
def openFile(file:str):
    os.startfile(file)
    
@eel.expose
def getFiles(children:bool,path="C:\\"):
    folder = Path(path)
    



    def scan_directory(directory: Path, children: bool):
        items = []

        try:
            entries = directory.iterdir()
        except PermissionError:
            # Can't access this directory at all
            return items
        print(entries)
        for item in entries:
            
            try:
                if item.is_dir():
                    stat = item.stat()
                    entry = {
                        "name": item.name,
                        "path": str(item),
                        "type": "directory",
                        "size": stat.st_size,
                        "modified": stat.st_mtime,
                        "created": getattr(stat, "st_birthtime", None),
                        }

                    if children:
                        entry["children"] = scan_directory(item, children)

                    items.append(entry)

                elif item.is_file():
                    stat = item.stat()

                    items.append({
                        "name": item.name,
                        "path": str(item),
                        "type": "file",
                        "extension": item.suffix,
                        "size": stat.st_size,
                        "modified": stat.st_mtime,
                        "created": getattr(stat, "st_birthtime", None),
                    })

            except PermissionError:
                # Skip this inaccessible entry and continue with the next one
                continue

            except OSError:
                # Skip other filesystem errors too
                continue

        return items



    return scan_directory(folder, children)

        
eel.start("")
def handle_exit(page, sockets):
    print("Program closed.")
    sys.exit()

try:
    
    eel.start('index.html', close_callback=handle_exit)
except KeyboardInterrupt:
   
    handle_exit()


