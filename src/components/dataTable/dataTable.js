import React from "react";import { DetailsList } from '@fluentui/react/lib/DetailsList';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { TooltipHost } from '@fluentui/react';
import "./dataTable.css";

const classNames = mergeStyleSets({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: "16px",
  },
  fileIconCell: {
    textAlign: "center",
    selectors: {
      "&:before": {
        content: ".",
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0px",
        visibility: "hidden",
      },
    },
  },
  fileIconImg: {
    verticalAlign: "middle",
    maxHeight: "16px",
    maxWidth: "16px",
  },
  controlWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  exampleToggle: {
    display: "inline-block",
    marginBottom: "10px",
    marginRight: "30px",
  },
  selectionDetails: {
    marginBottom: "20px",
  },
});
const controlStyles = {
  root: {
    margin: "0 30px 20px 0",
    maxWidth: "300px",
  },
};
const DataTable = () => {
  const columns = [
    {
      key: "column1",
      name: "File Type",
      className: classNames.fileIconCell,
      iconClassName: classNames.fileIconHeaderIcon,
      ariaLabel: "Column operations for File type, Press to sort on File type",
      iconName: "Page",
      isIconOnly: true,
      fieldName: "name",
      minWidth: 16,
      maxWidth: 16,

      onRender: (item) => (
        <TooltipHost content={`${item.fileType} file`}>
          <img
            src={item.iconName}
            className={classNames.fileIconImg}
            alt={`${item.fileType} file icon`}
          />
        </TooltipHost>
      ),
    },
    {
      key: "column2",
      name: "Name",
      fieldName: "name",
      minWidth: 210,
      maxWidth: 350,
      isRowHeader: true,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortAscendingAriaLabel: "Sorted A to Z",
      sortDescendingAriaLabel: "Sorted Z to A",

      data: "string",
      isPadded: true,
    },
    {
      key: "column3",
      name: "Date Modified",
      fieldName: "dateModifiedValue",
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,

      data: "number",
      onRender: (item) => {
        return <span>{item.dateModified}</span>;
      },
      isPadded: true,
    },
    {
      key: "column4",
      name: "Modified By",
      fieldName: "modifiedBy",
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      isCollapsible: true,
      data: "string",

      onRender: (item) => {
        return <span>{item.modifiedBy}</span>;
      },
      isPadded: true,
    },
    {
      key: "column5",
      name: "File Size",
      fieldName: "fileSizeRaw",
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      isCollapsible: true,
      data: "number",

      onRender: (item) => {
        return <span>{item.fileSize}</span>;
      },
    },
  ];

  const _randomDate=(start, end)=> {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return {
      value: date.valueOf(),
      dateFormatted: date.toLocaleDateString(),
    };
  }

  const FILE_ICONS = [
    { name: 'accdb' },
    { name: 'audio' },
    { name: 'code' },
    { name: 'csv' },
    { name: 'docx' },
    { name: 'dotx' },
    { name: 'mpp' },
    { name: 'mpt' },
    { name: 'model' },
    { name: 'one' },
    { name: 'onetoc' },
    { name: 'potx' },
    { name: 'ppsx' },
    { name: 'pdf' },
    { name: 'photo' },
    { name: 'pptx' },
    { name: 'presentation' },
    { name: 'potx' },
    { name: 'pub' },
    { name: 'rtf' },
    { name: 'spreadsheet' },
    { name: 'txt' },
    { name: 'vector' },
    { name: 'vsdx' },
    { name: 'vssx' },
    { name: 'vstx' },
    { name: 'xlsx' },
    { name: 'xltx' },
    { name: 'xsn' },
  ];
  
  const _randomFileIcon=()=>{
    const docType = FILE_ICONS[Math.floor(Math.random() * FILE_ICONS.length)].name;
    return {
      docType,
      url: `https://static2.sharepointonline.com/files/fabric/assets/item-types/16/${docType}.svg`,
    };
  }
  
  const _randomFileSize=()=>{
    const fileSize = Math.floor(Math.random() * 100) + 30;
    return {
      value: `${fileSize} KB`,
      rawSize: fileSize,
    };
  }
  

  const _generateDocuments=()=> {
    const items = [];
    for (let i = 0; i < 500; i++) {
      const randomDate = _randomDate(new Date(2012, 0, 1), new Date());
      const randomFileSize = _randomFileSize();
      const randomFileType = _randomFileIcon();
      let fileName = _lorem(2);
      fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1).concat(`.${randomFileType.docType}`);
      let userName = _lorem(2);
      userName = userName
        .split(' ')
        .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
        .join(' ');
      items.push({
        key: i.toString(),
        name: fileName,
        value: fileName,
        iconName: randomFileType.url,
        fileType: randomFileType.docType,
        modifiedBy: userName,
        dateModified: randomDate.dateFormatted,
        dateModifiedValue: randomDate.value,
        fileSize: randomFileSize.value,
        fileSizeRaw: randomFileSize.rawSize,
      });
    }
    return items;
  }

  const LOREM_IPSUM = (
    'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut ' +
    'labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
    'eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt '
  ).split(' ');
  let loremIndex = 0;

  const _lorem=(wordCount) =>{
    const startIndex = loremIndex + wordCount > LOREM_IPSUM.length ? 0 : loremIndex;
    loremIndex = startIndex + wordCount;
    return LOREM_IPSUM.slice(startIndex, loremIndex).join(' ');
  }

  return (
    <div className="data-container">
      <h4>Long Heading Name</h4>
      <DetailsList
              items={_generateDocuments()}
              columns={columns}
              setKey="multiple"
              isHeaderVisible={true}
              selectionPreservedOnEmptyClick={true}
              enterModalSelectionOnTouch={true}
            />
    </div>
  );
};

export default DataTable;
