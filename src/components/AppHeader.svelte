<div class="header-placeholder">
    <div class="header">
        <div class="header-left">
            <a href="/" class="header-title">Edusheets</a>
        </div>
        <div class="header-center"></div>
        <div class="header-right"></div>
    </div>
</div>

<style>
    .header-placeholder {
        height: 4rem;
        width: 100%;
    }
    .header {
        background-color: #FA6B6F;
		box-shadow: 0 3px 6px rgba(25, 25, 25, 0.3);
        color: #fff;
        display: flex;
		flex-flow: row nowrap;
        height: 4rem;
        left: 0;
        padding: 1rem;
        position: fixed;
        right: 0;
        top: 0;
    }
    .header a {
        color: #fff;
        text-decoration: none;
    }
    .header-left,
    .header-center,
    .header-right {
        display: flex;
        flex: 1 1;
		flex-flow: row nowrap;
    }
    .header-left {
		justify-content: flex-start;
    }
    .header-center {
		justify-content: center;
    }
    .header-right {
		justify-content: flex-end;
    }
    .header-title {
        font-size: 1rem;
        font-weight: 700;
        line-height: 2rem;
        text-transform: uppercase;
    }
</style>