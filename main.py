import eel 
from pathlib import Path
from datetime import datetime

eel.init('public')

@eel.expose
def getFiles(path):
    folder = Path(path)
    
    def scan_directory(directory:Path, children:bool):
        items = []

        for item in directory.iterdir(): 
            if item.is_dir() & children:
                items.append({
                    "name": item.name,
                    "path": str(item),
                    "type": "directory",
                    "children": scan_directory(item),
                })
            elif item.is_dir():
                items.append({
                    "name": item.name,
                    "path": str(item),
                    "type": "directory",  
                    })

            elif item.is_file():
                stat = item.stat()

                items.append({
                    "name": item.name,
                    "path": str(item),
                    "type": "file",
                    "extension": item.suffix,
                    "size": stat.st_size,
                    "modified": stat.st_mtime,
                    "created": stat.st_birthtime,
                })
        return items
    
    return scan_directory(folder)

        
eel.start("")

