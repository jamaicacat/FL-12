const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here
const createStructure = function (structure) {
  function createFolder(myFolder, parentNode) {
      const createdFolder = document.createElement('ul');
      createdFolder.classList.add('folder', 'folderClosed'); // так і не розумію для чого це? 
      // let imageElement = document.createElement('i');
      // imageElement.setAttribute('class', 'material-icons');
      // imageElement.innerText = 'folder';
      createdFolder.innerText = myFolder.title;
      // createdFolder.addEventListener('click', () => {
      //   if (imageElement.innerText === 'folder') {
      //     imageElement.innerText = 'folder_open';
      //     createdFolder.classList.remove('hide');
      //   } else {
      //     imageElement.innerText = 'folder';
      //     createdFolder.classList.add('hide');
      //   }
      //   });
      // parentNode.appendChild(imageElement);
        let li;
      if (Array.isArray(myFolder.children)) {
          for (const child of myFolder.children) {
              li = createdFolder.appendChild(document.createElement('li'));
              li.classList.add('folderItem', 'hidden');
              if (child.folder) { // folder
                  createFolder(child, li);
              } else { // item 
                  createFile(child, li);
              }
          }
      } else { //add empty sub element  
          li = createdFolder.appendChild(document.createElement('li'));
          li.innerText = 'Folder is empty';
      }
      parentNode.appendChild(createdFolder);
  }

  function createFile(myFile, parentNode) {
      parentNode.innerText = myFile.title;
  }

  for (const folder of structure) { // structure -> item
      if (folder.folder) { // item - folder?
          createFolder(folder, rootNode);
      } else { // item - item (film)
          createFile(folder, rootNode);
      }
  }
};

createStructure(structure);

let folders = document.getElementsByClassName('folder');
for (let i = 0; i < folders.length; i++) {
  folders[i].addEventListener('click', () => {
    if (folders[i].classList.contains('folderClosed')) {
      folders[i].classList.remove('folderClosed');
      folders[i].classList.add('folderOpened');
    } else {
      folders[i].classList.add('folderClosed');
      folders[i].classList.remove('folderOpened');
    }
  });
}