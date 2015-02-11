# c-bata pages

This repository is my portfolio website.


# Settings

intelliJ系IDEのFileWatcherという機能でSASSのコンパイルを行う場合，以下の設定をして下さい．

* Arguments

    ```
    --no-cache --update $FileName$:$ProjectFileDir$/css/style.css
    ```
    
* Output paths to refresh

    ```
    $ProjectFileDir$/css/style.css
    ```