class Song:
    def __init__(self, lyric):
        self.lyric = lyric
     
    def sing_me_a_song(self):
        print('\n'.join(self.lyric))

stairway = Song(["There’s a lady who's sure","all that glitters is gold","and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()