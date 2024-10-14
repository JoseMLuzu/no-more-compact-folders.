import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Accede a la configuración de la ventana
    const configuration = vscode.workspace.getConfiguration('explorer');
    
    // Modifica la opción 'compactFolders' y la desactiva
    configuration.update('compactFolders', false, vscode.ConfigurationTarget.Global)
        .then(() => {
            vscode.window.showInformationMessage('La opción Compact Folders ha sido deshabilitada automáticamente.');
        }, (error) => {
            console.error(error);
        });

    let disposable = vscode.commands.registerCommand('disableCompactFolders.disable', () => {
        vscode.window.showInformationMessage('Compact Folders ha sido deshabilitado.');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
